import React from 'react'
import { NavigationContext } from '@controls/NavigationView'
import type Identifiable from '@protocols/Identifiable'
import HStack from './HStack'

import * as styles from './List.css'

export default function List<T extends Identifiable>(
  collection: Array<T>,
  renderer: (item: T) => JSX.Element,
) {
  return (
    <ul className={styles.listStyles}>
      {collection.map((item) => {
        return (
          <li className={styles.itemStyles} key={item.id}>
            {HStack(
              renderer(item),
              <NavigationContext.Consumer>
                {(hasNavigation) =>
                  hasNavigation ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={styles.arrowStyles}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  ) : null
                }
              </NavigationContext.Consumer>,
            )
              .alignment('center')
              .spacing('medium')}
          </li>
        )
      })}
    </ul>
  )
}
