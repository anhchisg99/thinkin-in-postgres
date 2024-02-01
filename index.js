import express from 'express'
const port = 3003
const app = express()
import bodyParser from 'body-parser'
import pool from './config/index.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors'

app.use(cors())
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/views'));
// app.use(express.static('views'))
// ejs
app.set("view engine", "ejs")
app.set("views", "./views")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/get-tasks',async (req,res)=>{
    try {
        
        const {rows:tasks} = await pool.query(`select * from tasks`)
        res.json({
            status:"success",
            tasks
        })
    } catch (error) {
        console.log(error.message)
    }
})
app.get('/', async (req, res) => {
    const {rows:tasks} = await pool.query(`select * from tasks`)
    res.render('index',{tasks:tasks})
})
app.get('/create-task', async (req, res) => {
    try {
        const { title, content } = req.query
        const task = await pool.query(`insert into tasks(title,content,isCheck) values($1,$2,false)`, [title, content])
        res.json({
            status: "success",
            task
        })
    } catch (error) {
        console.log(error.message)
    }
})
app.post('/update-task', async (req, res) => {
    try {

        const { id } = req.body;
        await pool.query(`update tasks set isCheck=true where id=$1`, [id])
        res.json({
        })

    } catch (error) {

    }
})
app.listen(port, () => { console.log(`listen in ${port}`) })