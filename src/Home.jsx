import Section from "./Section";

export default function Home() {

    const MarioList = [
        {src: "assets\\img\\mario1\\t1.jpg", id: 0},
        {src: "assets\\img\\mario2\\t1.jpg", id: 3},
        {src: "assets\\img\\mario1\\t1.jpg", id: 0},
        {src: "assets\\img\\mario2\\t1.jpg", id: 3},
        {src: "assets\\img\\mario1\\t1.jpg", id: 0}
    ]

    const ZeldaList = [
        {src: "assets\\img\\zeldatotk\\t1.jpg", id: 6},
        {src: "assets\\img\\zelda2\\t1.jpg", id: 5},
        {src: "assets\\img\\zeldatotk\\t1.jpg", id: 6},
        {src: "assets\\img\\zelda2\\t1.jpg", id: 5},
        {src: "assets\\img\\zeldatotk\\t1.jpg", id: 6}
    ]

    const EmpfehlungList = [
        {src: "assets\\img\\growHome\\t1.jpg", id: 4},
        {src: "assets\\img\\subnautica1\\t1.jpg", id: 2},
        {src: "assets\\img\\growHome\\t1.jpg", id: 4},
        {src: "assets\\img\\subnautica1\\t1.jpg", id: 2},
        {src: "assets\\img\\growHome\\t1.jpg", id: 4}
    ]

    


    return(
        <>
        
    <Section title={"Mario"} List={MarioList}/>

    <Section title={"Zelda"} List={ZeldaList}/>

    <Section title={"Empfehlungen"} List={EmpfehlungList}/>

    <Section title={"Mario"} List={MarioList}/>

    <Section title={"Zelda"} List={ZeldaList}/>

    <Section title={"Subnautica"} List={EmpfehlungList}/>

    <Section title={"Mario"} List={MarioList}/>

    <Section title={"Zelda"} List={ZeldaList}/>

    <Section title={"Subnautica"} List={EmpfehlungList}/>


        </>
    )
}