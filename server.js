const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const connectensurelogin = require('connect-ensure-login');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const {finddata,getpropertyimages, Getdoc1, Getdoc2, Getdoc3,
Getdoc4,Getdoc5,Getdoc6,Getdoc7,Getdoc8,Getdoc9,Getdoc10,
Getdoc11,Getdoc12,Getdoc13,Getdoc14,Getdoc15,Getdoc16,Getdoc17,Getdoc18,
Getdoc19,Getdoc20,Getdoc21,Getdoc22,Getdoc23,Getdoc24,Getdoc25,Getdoc26,
Getdoc27,Getdoc28,Getdoc29,Getdoc30,Getdoc31,Getdoc32,Getdoc33} = require('./mongo.js')
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieparser())
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    //const x1=req.body;
    const x = await Getdoc1();
    const d = await getpropertyimages();
    const y=await Getdoc2();
    const z=await Getdoc3();
    const s=await Getdoc4();
    const u=await Getdoc5();
    const w=await Getdoc6();
    const r=await Getdoc7();
    const y1=await Getdoc8();
    const p1=await Getdoc9();
    const h1=await Getdoc10();
    const e1=await Getdoc11();
    const f1=await Getdoc12();
    const g1=await Getdoc13();
    const i1=await Getdoc14();
    const l1=await Getdoc15();
    const m1=await Getdoc16();
    const n1=await Getdoc17();
    const o1=await Getdoc18();
    const q1=await Getdoc19();
    const v1=await Getdoc20();
    const ab1=await Getdoc21();
    const bc1=await Getdoc22();
    const cd1=await Getdoc23();
    const de1=await Getdoc24();
    const ef1=await Getdoc25();
    const gh1=await Getdoc26();
    const re1=await Getdoc27();
    const em1=await Getdoc28();
    const el=await  Getdoc29();
    const rt1=await Getdoc30();
    //const p=finddata(x1);
    
    res.render("landingpage", { 
        a:x,
        b:d,
        c:y,
        j:z,
        t:s,
        u1:u,
        w1:w,
        r1:r,
        c1:y1,
        d1:p1,
        h:h1,
        e:e1,
        f:f1,
        g:g1,
        i:i1,
        l:l1,
        m:m1,
        n:n1,
        o:o1,
        q:q1,
        v:v1,
        ab:ab1,
        bc:bc1,
        cd:cd1,
        de:de1,
        ef:ef1,
        gh:gh1,
        re:re1,
        em:em1,
        el1:el,
        rt:rt1,
     })
});
app.get('/newpage', (req, res) => {
    res.render("newpage");
});
app.get('/airbnb', (req, res) => {
    res.render("propertylogin");
})
app.listen(PORT, () => {
    console.log("Server Started Now")
})
