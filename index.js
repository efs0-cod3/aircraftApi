const express = require("express");
const cors = require('cors');

const app = express()
app.use(cors())

let airVehicles = [{
        model: "c172",
        maker: "Cessna",
        performance: {
            "Cruise speed": " 122kn (140mph, 226km/h)",
            Range: "3,200 nmi (5,930 km)",
            "Rate of climb": "721ft/min"
        },
        img: "https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2012/02/23115111/399113-_BP20765-6c1cfd-original-1629145877-scaled.jpg"

    },
    {
        model: "c182",
        maker: "Cessna",
        performance: {
            "Cruise speed": " 122kn (140mph, 226km/h)",
            Range: "930nm",
            "Rate of climb": "924ft/min"
        },
        img: "https://skybrary.aero/sites/default/files/C182.jpg"

    },
    {
        model: "a321",
        maker: "Airbus",
        performance: {
            "Cruise speed": "450kts",
            Range: "3300nm",
            "Rate of climb": "1000 - 2500ft/min"
        },
        img: "https://forums.x-plane.org/screenshots/monthly_2020_02/756130277_N933AMExample(1).png.d9f0f0c2c3db79f3261b30be3ca42c6b.png"

    },
    {
        model: "a320",
        maker: "Airbus",
        performance: {
            "Cruise speed": "450kts",
            Range: "2700nm",
            "Rate of climb": "1000 - 2500ft/min"
        },
        img: "https://skybrary.aero/sites/default/files/A320.jpg"

    },
    {
        model: "b777",
        maker: "Boeing",
        performance: {
            "Cruise speed": "490kts",
            Range: "7,825nm",
            "Rate of climb": "1500 - 3000ft/min"
        },
        img: "https://www.itln.in/itlnbackend/assets/uploads/Emirates-to-induct-two-B777Fs-convert-four-B777-300ERs-to-freighters.jpeg"
    },
    {
        model: "b738",
        maker: "Boeing",
        performance: {
            "Cruise speed": "460kts",
            Range: "2000nm",
            "Rate of climb": "1500 - 2000ft/min"
        },
        img: "https://skybrary.aero/sites/default/files/B738.jpg"
    },
    {
        model: "sr22",
        maker: "Cirrus",
        performance: {
            "Cruise speed": "180kts",
            Range: "700nm",
        },
        img: "https://www.aerocontact.com/public/img/aviaexpo/produits/images/540/detail_Cirrus-SR22T_900x636.jpg"
    },
    {
        model: "sf50",
        maker: "Cirrus",
        
        performance: {
            "Cruise speed": "305kts",
            Range: "1275nm",
            "Rate Of Climb": "1,609ft/min"
        },
        img: "https://www.aopa.org/-/media/Images/AOPA-Main/Aircraft-Guide/Cirrus-SF50/17_Cirrus-SF50_0004/17_cirrus-sf50_0004_16x9.jpg"

    },
    {
        model: "r44",
        maker: "Robinson",
        type: "passenger",
        performance: {
            "Cruise speed": "113kts",
            Range: "1275nm",
            "Rate Of Climb": "1,000ft/min"
        },
        img: "https://skybrary.aero/sites/default/files/R44.jpg"
    },
    {
        model: "ec30",
        maker: "Eurocopter",
        type: "passenger",
        performance: {
            "Cruise speed": "127kts",
            Range: "345nm",
        },
        img: "https://skybrary.aero/sites/default/files/EC30.jpg"
    },
    {
        model: "uh-60",
        maker: "Sirkorsky",
        type: "militar",
        performance: {
            "Cruise speed": "152kts",
            Range: "320nm",
            "Rate Of Climb": "1,646ft/min"
        },
        img: "https://skybrary.aero/sites/default/files/EC30.jpg"
    },
]

app.get("/", (req, res) => {
    res.send(`
    <h1>How to use:</h1>
    <p>To get all the aircrafts request => "/api/aircraft" </p>
    <p>To get aircraft by maker request w/ maker capitalize ex: Airbus => "/api/aircraft/maker/:maker" </p>
    <p>To get aircraft & helicopter by model request ex:c172 => "/api/aircraft/model/:model" </p>
    <p>To get all the helicopters request ex:passenger => "/api/hel/:type" </p>
    `)  
});

app.get("/api/aircraft", (req, res) => {
    res.send(airVehicles)
});

app.get("/api/aircraft/model/:model", (req, res) => {
    const model = req.params.model;

    let aircraft = airVehicles.find(aircraft => {
        return aircraft.model === model
    })

    res.send(aircraft)
});

app.get("/api/aircraft/maker/:maker", (req, res) => {
    const maker = req.params.maker;

    let aircraft = airVehicles.filter(aircraft => {
        return aircraft.maker === maker
    })

    res.send(aircraft)
});

app.get("/api/hel/:type", (req, res) => {
    const type = req.params.type;

    let helicopter = airVehicles.filter(hel => {
        return hel.type === type
    })
    res.send(helicopter)
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server running on port ${PORT}, betta Catch it`);