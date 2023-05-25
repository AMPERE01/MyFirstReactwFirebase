import React, { useState, useEffect} from 'react'
import { collection, addDoc, getDocs} from 'firebase/firestore'
import { db } from '../firebase'

function Todo(){
     const [todo, setTodo] = useState("");
     const [todos, setTodos] = useState([]);

     const addTodo = async (e) => {
          e.preventDefault();

          try{
               const docRef = await addDoc(collection(db, "myFirestReact"),{
                    todo : todo
               })
               console.log("doccument writen with ID : ", docRef.id)

          } catch(e){
               console.error("error adding document : ",e)
          }

     }

     const fetchPost = async () => {
         
          await getDocs(collection(db, "myFirestReact"))
               .then((querySnapshot) => {
                    const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
                    setTodos(newData);
                    console.log(todos, newData)
          })
     }

     

     useEffect(() => {
          fetchPost();
     },[]);




     return(
          <div>
               <h1>Todo-App</h1>
               <div>
                    <input type="text" placeholder='What do you have to day?'
                    onChange={(e) => setTodo(e.target.value)}
                    ></input>
                    <button type='submit' onClick={addTodo}>Summit</button>
               </div>
               <div>
                    {/* display */}
                    {todos?.map((todo,i) => (
                         <p key={i}>{todo.todo}</p>
                    ))}
               </div>
          </div>
     )

}

export default Todo