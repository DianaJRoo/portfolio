import React from "react";
import Card from './card';
import instagramFeed1 from "../../img/instagramFeed1.png";
import instagramFeed2 from "../../img/instagramFeed2.png";
import todoList1 from "../../img/todoList1.png";
import todoList2 from "../../img/todoList2.png";
import todoList3 from "../../img/todoList3.png";
import starWars1 from "../../img/starWars1.png";
import starWars2 from "../../img/starWars2.png";
import contactList1 from "../../img/contactList1.png";
import contactList2 from "../../img/contactList2.png";
import contactList3 from "../../img/contactList3.png";





const Proyectos = () => {

    return <>


        <div className="flex flex-col justify-center aling-center ">

            <Card
                images={[
                    instagramFeed1,
                    instagramFeed2

                ]}

                title="Instagram Feed"
                description1="HTML, CSS, BOOTSTRAP. "
                textButton="Ver Proyecto"
                buttonLink="https://taylorjroo.netlify.app/"
            />

            <Card
                images={[
                    starWars1,
                    starWars2,


                ]}

                title="Star Wars"
                description1="HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT, FLUX, API. "
                textButton="Ver Proyecto"
                buttonLink="https://6662039bb9ecdb41bbf15b0c--diana-starsw.netlify.app/"
            />


            <Card
                images={[
                    todoList1,
                    todoList2,
                    todoList3

                ]}

                title="To Do List"
                description1="HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT. "
                textButton="Ver Proyecto"
                buttonLink="https://todolistjroo.netlify.app/"
            />




            <Card
                images={[
                    contactList1,
                    contactList2,
                    contactList3

                ]}

                title="Contact List"
                description1="HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT, FLUX, API. "

                buttonLink="https://contactlistjroo.netlify.app/"
            />


            <Card
                images={[
                    todoList1,
                    todoList2,
                    todoList3

                ]}

                title="ToDoList"
                description1="HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT. "

                buttonLink="https://todolistjroo.netlify.app/"
            />

        </div>




    </>


}


export default Proyectos;
