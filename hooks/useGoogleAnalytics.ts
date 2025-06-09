"use client";

import { useCallback, useEffect, useState } from 'react';

type EventParams = {
    action: string;
    category: string;
    label?: string;
    value?: number;
    [key: string]: any;
};

export function useGoogleAnalytics() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const trackEvent = useCallback(
        ({ action, category, label, value, ...rest }: EventParams) => {
            if (!GA_MEASUREMENT_ID || !isClient || !window.gtag) {
                return;
            }

            window.gtag('event', action, {
                event_category: category,
                ...(label && { event_label: label }),
                ...(value !== undefined && { value }),
                ...rest,
            });
        },
        [GA_MEASUREMENT_ID, isClient]
    );

    const trackPageView = useCallback(
        (url: string, title?: string) => {
            if (!GA_MEASUREMENT_ID || !isClient || !window.gtag) {
                return;
            }

            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
                ...(title && { page_title: title }),
            });
        },
        [GA_MEASUREMENT_ID, isClient]
    );

    const trackArtifactView = useCallback(
        (artifactId: string, artifactName: string) => {
            if (!isClient){
                return;
            }
            trackEvent({
                action: 'view_item',
                category: 'artifact',
                label: artifactName,
                artifact_id: artifactId,
            });
        },
        [trackEvent, isClient]
    );

    const trackResearchView = useCallback(
        (researchId: string, researchTitle: string) => {
            if (!isClient){
                return;
            }
            trackEvent({
                action: 'view_item',
                category: 'research',
                label: researchTitle,
                research_id: researchId,
            });
        },
        [trackEvent, isClient]
    );

    const trackFormSubmission = useCallback(
        (formName: string, success: boolean) => {
            if (!isClient){
                return;
            }
            trackEvent({
                action: 'form_submit',
                category: 'engagement',
                label: formName,
                value: success ? 1 : 0,
                success,
            });
        },
        [trackEvent, isClient]
    );

    const track3DModelInteraction = useCallback(
        (modelId: string, interaction: 'rotate' | 'zoom' | 'pan') => {
            if (!isClient){
                return;
            }
            trackEvent({
                action: '3d_model_interaction',
                category: 'engagement',
                label: interaction,
                model_id: modelId,
            });
        },
        [trackEvent, isClient]
    );

    const trackSearch = useCallback(
        (query: string, resultsCount: number) => {
            if (!isClient){
                return;
            }
            trackEvent({
                action: 'search',
                category: 'engagement',
                label: query,
                value: resultsCount,
                search_term: query,
                results_count: resultsCount,
            });
        },
        [trackEvent, isClient]
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
