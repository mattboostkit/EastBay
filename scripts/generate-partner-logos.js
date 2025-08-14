const fs = require('fs');
const path = require('path');

// SVG template for placeholder logos
const createLogoSVG = (initials, bgColor = '#00AABC', textColor = '#FFFFFF') => {
  return `<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="${bgColor}"/>
  <text x="100" y="55" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="${textColor}">
    ${initials}
  </text>
</svg>`;
};

// Partner logo configurations
const partners = [
  { filename: 'nlhf-logo.svg', initials: 'NLHF', bgColor: '#00AABC' },
  { filename: 'cat-logo.svg', initials: 'CAT', bgColor: '#F47529' },
  { filename: 'folkestone-museum-logo.svg', initials: 'FM', bgColor: '#00AABC' },
  { filename: 'frag-logo.svg', initials: 'FRAG', bgColor: '#F47529' },
  { filename: 'dag-logo.svg', initials: 'DAG', bgColor: '#00AABC' },
  { filename: 'kent-uni-logo.svg', initials: 'UoK', bgColor: '#F47529' },
  { filename: 'kcf-logo.svg', initials: 'KCF', bgColor: '#00AABC' },
  { filename: 'lawson-trust-logo.svg', initials: 'LT', bgColor: '#F47529' },
  { filename: 'rdh-logo.svg', initials: 'RDH', bgColor: '#00AABC' },
  { filename: 'gwf-logo.svg', initials: 'GWF', bgColor: '#F47529' },
  { filename: 'swire-logo.svg', initials: 'SCT', bgColor: '#00AABC' },
  { filename: 'cba-logo.svg', initials: 'CBA', bgColor: '#F47529' },
  { filename: 'ara-logo.svg', initials: 'ARA', bgColor: '#00AABC' },
  { filename: 'sprs-logo.svg', initials: 'SPRS', bgColor: '#F47529' },
  { filename: 'fcat-logo.svg', initials: 'FCAT', bgColor: '#00AABC' },
  { filename: 'fhdc-logo.svg', initials: 'FHDC', bgColor: '#F47529' },
];

// Create directory if it doesn't exist
const logoDir = path.join(__dirname, '..', 'public', 'partners');
if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

// Generate logos
partners.forEach(partner => {
  const svg = createLogoSVG(partner.initials, partner.bgColor);
  const filePath = path.join(logoDir, partner.filename);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${partner.filename}`);
});

console.log('\nAll partner logos generated successfully!');