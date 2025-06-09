// Google Analytics utility functions
// This file provides a centralized place for all analytics-related functions

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

// Initialize Google Analytics
export const initGA = (measurementId: string): void => {
  if (typeof window === 'undefined' || !measurementId) return;
  
  // Skip in development mode
  if (process.env.NODE_ENV === 'development') return;
  
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    cookie_flags: 'SameSite=None;Secure',
    anonymize_ip: true
  });
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    ...(title && { page_title: title }),
  });
};

// Track custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
  ...rest
}: EventParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    ...(label && { event_label: label }),
    ...(value !== undefined && { value }),
    ...rest,
  });
};

// Specialized event tracking functions
export const trackArtifactView = (artifactId: string, artifactName: string): void => {
  trackEvent({
    action: 'view_item',
    category: 'artifact',
    label: artifactName,
    artifact_id: artifactId,
  });
};

export const trackResearchView = (researchId: string, researchTitle: string): void => {
  trackEvent({
    action: 'view_item',
    category: 'research',
    label: researchTitle,
    research_id: researchId,
  });
};

export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
    value: success ? 1 : 0,
    success,
  });
};

export const track3DModelInteraction = (
  modelId: string,
  interaction: 'rotate' | 'zoom' | 'pan'
): void => {
  trackEvent({
    action: '3d_model_interaction',
    category: 'engagement',
    label: interaction,
    model_id: modelId,
  });
};

export const trackSearch = (query: string, resultsCount: number): void => {
  trackEvent({
    action: 'search',
    category: 'engagement',
    label: query,
    value: resultsCount,
    search_term: query,
    results_count: resultsCount,
  });
};

// Add necessary type for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any> | undefined
    ) => void;
  }
}
