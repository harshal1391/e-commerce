import React from 'react'
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';

function Homepage() {

   async function adddata(){
       try {
           await addDoc(collection(fireDB, "users"), {
             name: "Kashyapi",
             age: 2.5,
           });

       } catch (error) {
           console.log(error)
           
       }
    }
    async function getData() {
      try {
       const users = await getDocs(collection(fireDB, "users"), {
          name: "Kashyapi",
          age: 2.5,
        });
        users.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <Layout>
        <h1>Home</h1>

        <button onClick={adddata}>add data to firebase</button>
        <button onClick={getData}>get data from firebase</button>
      </Layout>
    );
}

export default Homepage;