#!/usr/bin/env node

/**
 * SEO Optimization Script for East Wear Bay Project
 * Run this script to check and improve SEO across the site
 */

import fs from 'fs';
import path from 'path';

interface SEOIssue {
  file: string;
  issue: string;
  severity: 'high' | 'medium' | 'low';
  fix?: string;
}

const issues: SEOIssue[] = [];

// Check for meta descriptions
function checkMetaDescriptions() {
  const pagesDir = path.join(process.cwd(), 'app');
  const pageFiles = getAllPageFiles(pagesDir);
  
  pageFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Check for metadata export
    if (!content.includes('export const metadata')) {
      issues.push({
        file: path.relative(process.cwd(), file),
        issue: 'Missing metadata export',
        severity: 'high',
        fix: 'Add metadata export with title and description'
      });
    }
    
    // Check for description length
    const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch && descMatch[1]) {
      const desc = descMatch[1];
      if (desc.length < 120) {
        issues.push({
          file: path.relative(process.cwd(), file),
          issue: `Meta description too short (${desc.length} chars)`,
          severity: 'medium',
          fix: 'Expand to 150-160 characters'
        });
      } else if (desc.length > 160) {
        issues.push({
          file: path.relative(process.cwd(), file),
          issue: `Meta description too long (${desc.length} chars)`,
          severity: 'medium',
          fix: 'Shorten to 150-160 characters'
        });
      }
    }
  });
}

// Check for structured data
function checkStructuredData() {
  const componentFiles = getAllTsxFiles(path.join(process.cwd(), 'components'));
  
  const requiredSchemas = [
    'Organization',
    'LocalBusiness', 
    'Museum',
    'Event',
    'Article',
    'FAQPage'
  ];
  
  const foundSchemas: string[] = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    requiredSchemas.forEach(schema => {
      if (content.includes(`"@type": "${schema}"`)) {
        foundSchemas.push(schema);
      }
    });
  });
  
  requiredSchemas.forEach(schema => {
    if (!foundSchemas.includes(schema)) {
      issues.push({
        file: 'components/SEO/StructuredData.tsx',
        issue: `Missing ${schema} schema`,
        severity: 'medium',
        fix: `Add ${schema} structured data for better search visibility`
      });
    }
  });
}

// Check image alt texts
function checkImageAltTexts() {
  const files = getAllTsxFiles(process.cwd());
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const imageMatches = content.matchAll(/<Image[^>]*>/g);
    
    for (const match of imageMatches) {
      if (!match[0].includes('alt=')) {
        issues.push({
          file: path.relative(process.cwd(), file),
          issue: 'Image missing alt text',
          severity: 'high',
          fix: 'Add descriptive alt text for accessibility and SEO'
        });
      }
    }
  });
}

// Check for canonical URLs
function checkCanonicalUrls() {
  const hasCanonical = fs.existsSync(
    path.join(process.cwd(), 'components/SEO/CanonicalLink.tsx')
  );
  
  if (hasCanonical) {
    // Check if it's being used in layout
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
    
    if (!layoutContent.includes('CanonicalLink')) {
      issues.push({
        file: 'app/layout.tsx',
        issue: 'CanonicalLink component not used',
        severity: 'medium',
        fix: 'Import and use CanonicalLink in root layout'
      });
    }
  }
}

// Helper functions
function getAllPageFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name === 'page.tsx') {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function getAllTsxFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    if (!fs.existsSync(currentDir)) return;
    
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.includes('node_modules')) {
        traverse(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Generate SEO report
function generateReport() {
  console.log('\n🔍 SEO Audit Report for East Wear Bay Project\n');
  console.log('=' .repeat(50));
  
  const highIssues = issues.filter(i => i.severity === 'high');
  const mediumIssues = issues.filter(i => i.severity === 'medium');
  const lowIssues = issues.filter(i => i.severity === 'low');
  
  if (highIssues.length > 0) {
    console.log('\n🔴 High Priority Issues:\n');
    highIssues.forEach(issue => {
      console.log(`  📁 ${issue.file}`);
      console.log(`     Issue: ${issue.issue}`);
      if (issue.fix) console.log(`     Fix: ${issue.fix}`);
      console.log();
    });
  }
  
  if (mediumIssues.length > 0) {
    console.log('\n🟡 Medium Priority Issues:\n');
    mediumIssues.forEach(issue => {
      console.log(`  📁 ${issue.file}`);
      console.log(`     Issue: ${issue.issue}`);
      if (issue.fix) console.log(`     Fix: ${issue.fix}`);
      console.log();
    });
  }
  
  if (lowIssues.length > 0) {
    console.log('\n🟢 Low Priority Issues:\n');
    lowIssues.forEach(issue => {
      console.log(`  📁 ${issue.file}`);
      console.log(`     Issue: ${issue.issue}`);
      if (issue.fix) console.log(`     Fix: ${issue.fix}`);
      console.log();
    });
  }
  
  console.log('=' .repeat(50));
  console.log('\n📊 Summary:');
  console.log(`   High Priority: ${highIssues.length} issues`);
  console.log(`   Medium Priority: ${mediumIssues.length} issues`);
  console.log(`   Low Priority: ${lowIssues.length} issues`);
  console.log(`   Total: ${issues.length} issues\n`);
  
  // SEO score calculation
  const baseScore = 100;
  const deductions = (highIssues.length * 10) + (mediumIssues.length * 5) + (lowIssues.length * 2);
  const score = Math.max(0, baseScore - deductions);
  
  console.log(`🏆 SEO Score: ${score}/100`);
  
  if (score >= 90) {
    console.log('   Excellent! Site is well-optimized for search engines.');
  } else if (score >= 70) {
    console.log('   Good, but there\'s room for improvement.');
  } else if (score >= 50) {
    console.log('   Fair. Several important SEO improvements needed.');
  } else {
    console.log('   Poor. Significant SEO work required before launch.');
  }
  
  console.log('\n💡 Quick Wins:');
  console.log('   1. Add missing meta descriptions to all pages');
  console.log('   2. Ensure all images have descriptive alt text');
  console.log('   3. Implement Organization schema for the Trust');
  console.log('   4. Add Open Graph tags for social sharing');
  console.log('   5. Create a comprehensive XML sitemap\n');
}

// Main execution
console.log('Starting SEO audit...\n');

checkMetaDescriptions();
checkStructuredData();
checkImageAltTexts();
checkCanonicalUrls();

generateReport();

// Save report to file
const reportPath = path.join(process.cwd(), 'seo-audit-report.json');
fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2));
console.log(`\n📄 Detailed report saved to: ${reportPath}\n`);