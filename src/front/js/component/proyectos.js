import React from "react";
import Card from './card';
import instagramFeed1 from "../../img/instagramFeed1.png";
import instagramFeed2 from "../../img/instagramFeed2.png";
import todoList1 from "../../img/todoList1.png";
import todoList2 from "../../img/todoList2.png";
import todoList3 from "../../img/todoList3.png";


const Proyectos = () => {

    return <>


        <div className="flex flex-col justify-center aling-center ">

            <Card
                images={[
                    instagramFeed1,
                    instagramFeed2

                ]}

                title="InstagramFeed"
                description1="HTML, CSS, BOOTSTRAP. "

                buttonLink="https://taylorjroo.netlify.app/"
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
