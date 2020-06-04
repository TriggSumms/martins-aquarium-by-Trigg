let tipCollection=[]
/*  {
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "DONT Hand Feed the Fish"
},
{
    tip: "Yuh boi"
}
]
*/


const getTipData = () => {
    return fetch("http://localhost:8088/tips").then(
        (triggResponse) => {
            return triggResponse.json()
        }
    )
        .then(
            (arrayOfTip) => {
                // 100 percent sure the data is back
                tipCollection = arrayOfTip
            }
        )
}