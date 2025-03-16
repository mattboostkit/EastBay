"use client";

import { useCallback } from 'react';

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Custom hook for tracking Google Analytics events
 * Provides a convenient way to track custom events throughout the application
 */
export function useGoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Track a custom event
  const trackEvent = useCallback(
    ({ action, category, label, value, ...rest }: EventParams) => {
      if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
        return;
      }

      window.gtag('event', action, {
        event_category: category,
        ...(label && { event_label: label }),
        ...(value !== undefined && { value }),
        ...rest,
      });
    },
    [GA_MEASUREMENT_ID]
  );

  // Track a page view
  const trackPageView = useCallback(
    (url: string, title?: string) => {
      if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
        return;
      }

      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        ...(title && { page_title: title }),
      });
    },
    [GA_MEASUREMENT_ID]
  );

  // Track artifact view
  const trackArtifactView = useCallback(
    (artifactId: string, artifactName: string) => {
      trackEvent({
        action: 'view_item',
        category: 'artifact',
        label: artifactName,
        artifact_id: artifactId,
      });
    },
    [trackEvent]
  );

  // Track research publication view
  const trackResearchView = useCallback(
    (researchId: string, researchTitle: string) => {
      trackEvent({
        action: 'view_item',
        category: 'research',
        label: researchTitle,
        research_id: researchId,
      });
    },
    [trackEvent]
  );

  // Track form submission
  const trackFormSubmission = useCallback(
    (formName: string, success: boolean) => {
      trackEvent({
        action: 'form_submit',
        category: 'engagement',
        label: formName,
        value: success ? 1 : 0,
        success,
      });
    },
    [trackEvent]
  );

  // Track 3D model interaction
  const track3DModelInteraction = useCallback(
    (modelId: string, interaction: 'rotate' | 'zoom' | 'pan') => {
      trackEvent({
        action: '3d_model_interaction',
        category: 'engagement',
        label: interaction,
        model_id: modelId,
      });
    },
    [trackEvent]
  );

  // Track search query
  const trackSearch = useCallback(
    (query: string, resultsCount: number) => {
      trackEvent({
        action: 'search',
        category: 'engagement',
        label: query,
        value: resultsCount,
        search_term: query,
        results_count: resultsCount,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackArtifactView,
    trackResearchView,
    trackFormSubmission,
    track3DModelInteraction,
    trackSearch,
  };
}