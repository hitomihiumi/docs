import { lazy } from 'react';

export default function GuideData() {
    return null;
}

export const pages = [
    {
        name: 'lazy-canvas',
        displayName: 'Lazy Canvas',
        pages: [
            {
                name: 'getting-started',
                displayName: 'Getting Started',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/getting-started.md')),
            },
            {
                name: 'figure-layers',
                displayName: 'Figure Layers',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/figure-layers.md')),
            },
            {
                name: 'image-layers',
                displayName: 'Image Layers',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/image-layers.md')),
            },
            {
                name: 'text-layer',
                displayName: 'Text Layer',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/text-layer.md')),
            },
            {
                name: 'advanced-manipulation',
                displayName: 'Advanced Manipulation',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/advanced-manipulation.md')),
            },
            {
                name: 'gradient',
                displayName: 'Gradient',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/gradient.md')),
            },
            {
                name: 'outline',
                displayName: 'Outline',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/outline.md')),
            },
            {
                name: 'pattern',
                displayName: 'Pattern',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/pattern.md')),
            },
            {
                name: 'link',
                displayName: 'Link',
                component: lazy(() => import('@/pages/guide/_guides/lazy-canvas/link.md')),
            },
        ],
    },
];