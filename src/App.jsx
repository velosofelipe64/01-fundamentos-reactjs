import { useState } from 'react'
import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author = "Felipe Veloso"
            content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ea modi iure nihil hic aspernatur quia quisquam iusto! Quibusdam vel earum dicta iusto sunt suscipit facere dolor, fuga nulla. Reiciendis!"
          />
          <Post
            author = "Gustavo Rafael"
            content = "Um novo post"
          />
        </main>
      </div>
    </div>
  )
}


