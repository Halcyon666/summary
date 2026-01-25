/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode, useState, useMemo } from 'react';
import clsx from 'clsx';
import DocCard from '@theme/DocCard';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';

// Use require() to avoid module resolution issues with /client subpath
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { useCurrentSidebarSiblings, filterDocCardListItems } = require('@docusaurus/plugin-content-docs/client');

// --- 修复点：直接在这里定义 Props，而不是从 @theme 导入 ---
export interface Props {
    items?: PropSidebarItem[];
    className?: string;
}

function DocCardListForCurrentSidebarCategory({ className }: Props) {
    const items = useCurrentSidebarSiblings();
    return <DocCardList items={items} className={className} />;
}

function DocCardListItem({
    item,
}: {
    item: PropSidebarItem;
}) {
    return (
        <article className={clsx(styles.docCardListItem, 'col col--6')}>
            <DocCard item={item} />
        </article>
    );
}

export default function DocCardList(props: Props): ReactNode {
    const { items, className } = props;
    if (!items) {
        return <DocCardListForCurrentSidebarCategory {...props} />;
    }

    const [searchQuery, setSearchQuery] = useState('');
    const filteredItems = filterDocCardListItems(items);

    const visibleItems = useMemo(() => {
        if (!searchQuery) return filteredItems;
        const lowerQuery = searchQuery.toLowerCase();

        // 显式指定 item 类型，解决 implicitly has an 'any' type
        return filteredItems.filter((item: PropSidebarItem) => {
            // @ts-ignore
            const label = item.label || item.text || item.value || '';
            return label.toLowerCase().includes(lowerQuery);
        });
    }, [filteredItems, searchQuery]);

    return (
        <>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder={translate({
                        id: 'theme.DocCardList.search.placeholder',
                        message: 'Search categories...',
                        description: 'The placeholder for the category search input',
                    })}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Filter specific categories"
                />
            </div>
            <section className={clsx('row', className)}>
                {visibleItems.map((item: PropSidebarItem, index: number) => (
                    <DocCardListItem key={index} item={item} />
                ))}
                {visibleItems.length === 0 && (
                    <div className="col col--12">
                        <p style={{ textAlign: "center", fontStyle: "italic", opacity: 0.6 }}>
                            <Translate id="theme.DocCardList.search.noResults">
                                No matching items found.
                            </Translate>
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}
