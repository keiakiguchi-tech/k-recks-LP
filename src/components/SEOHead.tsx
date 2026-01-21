import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
}

export function SEOHead({
    title = '簡単お見積もり依頼 | 株式会社K-Recks',
    description = '解体工事のお見積もりなら株式会社K-Recksへ。簡単フォーム入力でスピーディーにお見積もりいたします。'
}: SEOHeadProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Helmet>
    );
}
