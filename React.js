console.log("hello world");



const placeholder = document.getElementById("placeholder");
const about = document.getElementById("placeholder1");

const headerStyle={
    color:"red",    
    textDecoration: "underline"
};


const component=React.createElement("h1",{style:headerStyle},"Welcome to React");


const link=React.createElement("a",{
    href:"https://google.com",
    style:{
        color:"Blue",
        textDecoration:"underline"
    }

},"About React");

const link1=React.createElement("a",{
    href:"https://reactjs.org",
    style:{
        color:"Blue",
        textDecoration:"underline"
    }

},"React Docs");


//placeholder.innerHTML=component;

ReactDOM.render( link1, placeholder);
ReactDOM.render( link, about);

