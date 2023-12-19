import React, { useState } from 'react'
import CarouselItem from './CarouselItem'


function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            title: "Diablo IV",
            image: 'https://xlunargaming.com/wp-content/uploads/2023/03/Diablo-IV.jpg',
            link: '/products/1'
        },
        {
            title: "Wild Hearts",
            image: 'https://media.contentapi.ea.com/content/dam/eacom/wild-hearts/images/2022/09/wild-hearts-featured-image.jpg.adapt.crop16x9.1023w.jpg',
            link: '/products/2'
        },
        {
            title: "God of War: Ragnarok",
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg',
            link: '/products/3'
        }
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    }
    return (
        <div className='carousel'>
            <div
                className='inner'
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} />
                })}
            </div>

            <div className='carousel-buttons'>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                    className='button-arrow'
                >
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <div className='indicators'>
                    {items.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    updateIndex(index)
                                }}
                                className='indicator-buttons'
                            >
                                <span
                                    className={`material-symbols-outlined ${index === activeIndex ?
                                        "indicator-symbol-active" : "indicator-symbol"
                                        }`}
                                >
                                    radio_button_checked
                                </span>
                            </button>
                        )
                    })}
                </div>
                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }}
                    className='button-arrow'>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Carousel