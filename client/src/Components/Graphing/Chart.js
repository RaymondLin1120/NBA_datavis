import React, { useState } from 'react'
// import OptionsDropdown from './OptionsDropdown'

export default function Chart ({ children, config, style }) {

    const [optionsVisible, setOptionsVisible] = useState(false)

    // let options =  {
    //     'FullScreen': {
    //         icon: 'ion-ios-expand',
    //         cb: () => {
    //             // TODO
    //         }
    //     },
    //     'Export to CSV': {
    //         icon: 'ion-ios-filing',
    //         cb: () => {
    //             // TODO
    //         }
    //     }
    // }

    return (
        <section className="chart">
            <span className="options-container">
                    {/* <OptionsDropdown
                        options={ options }
                        visible={ optionsVisible }
                        cb={ () => setOptionsVisible(false) }
                    >
                        <i
                            className="ion-ios-more"
                            onClick={ () => setOptionsVisible(!optionsVisible) }
                        />
                    </OptionsDropdown> */}
            </span>
        { children }
        </section>
    )
}