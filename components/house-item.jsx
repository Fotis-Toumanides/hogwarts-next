'use client';

import Link from 'next/link';
import classes from './house-item.module.css';
function HouseItem({house}){
    
        // Checking if houseColors are recognized by browsers.
    function isColorNameSupported(colorName) {
        let checkColor = colorName.toLowerCase()
        // These are the color names supported by browsers
        const allColors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];
        if (allColors.includes(checkColor)) {
            return true
        } else {
            return false
        }
    }

    let houseColours = house.houseColours.split(" and ")
    let colorOne, colorTwo

    if (isColorNameSupported(houseColours[0]) && isColorNameSupported(houseColours[1])) {
        colorOne = houseColours[0].toLowerCase()
        colorTwo = houseColours[1].toLowerCase()
    } else {
        colorOne = "white"
        colorTwo = "black"
    }

    return(
        <article className='px-4 border-solid shadow-md w-1/3 min-w-80 mx-32 my-6 rounded-lg' >
            <div className='flex justify-between py-4'>
                <Link href={`/houses/${house.id}`}><h2 className='font-bold text-lg'>{house.name}</h2></Link>
                <p>{house.animal}</p>
            </div>
            <div className={classes.colorDiv} style={{ background: `linear-gradient(90deg, ${colorOne} 0%, ${colorTwo} 100%)` }} ></div>
            <div className='flex gap-1 py-4'>
                <p>Founder: {' '}</p>
                <p className='font-semibold'> {house.founder}</p>
            </div>
        </article>
    )
};

export default HouseItem;