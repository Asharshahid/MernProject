import User from "../model/userModel.js";
import Post from "../model/postModel.js";
import jwt from "jsonwebtoken";
// import path from "path";
// import multer from "multer"


// ### REGISTER USER


export async function register(req, res){
    try {
        const {username,email,password,name}= req.body;
        // Check Username & Email Already Exist
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        const newUser = new User({ username, email, password, name });
        await newUser.save();  
        res.send(newUser);
    } 
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
    

// ### LOGIN USER

export async function login(req, res){
    try{
        const {email,password} = req.body;
        const existUser = await User.findOne({email})
        if(existUser){
            if(existUser.password===password){
                const token = await jwt.sign({_id:existUser._id}, 'ashar123456789');
                res.cookie("jwt",token,{
                    // expires:new Date(Date.now()+5000),
                    httpOnly:true
                })

                res.status(201).send(existUser)
            }
            else{
                res.status(501).send("Invalid details")
            }   
        }
        else{
            res.status(501).send("Invalid details")
        } 
    } 
    catch(error){
        res.status(500).send(error)
    }
}

//### CREATE POST

export async function createpost(req, res){
    try{
        const {title,desc,filename} = req.body;
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token,'ashar123456789');
        const findUser = await User.findOne({_id:verify._id})
        const newPost = new Post({
            userId:findUser._id,
            username:findUser.username,
            title,
            desc
        })
        await newPost.save()
        res.status(200).send(newPost)
        console.log(newPost);
    }
    catch(error){
        res.status(500).send("error")
    }
}


//### LOGOUT

export async function logout(req,res){
    try{
        const token = res.clearCookie("jwt");
        res.status(200).json("Yes token delete")
    }
    catch(err){
        res.status(404).send(err)
    }
}

//### UPDATE POST

export async function updatepost(req, res){
    try{
        // Find Post By ID
        const postId = req.params.id;
        const findPost = await Post.findById(postId)
        if(findPost){
            const updatePost = await Post.findByIdAndUpdate({_id:postId},{$set:req.body},{new:true})
            res.status(201).send({UpdatePost:"yes", updatePost})
        }else{
            res.json("This post is not your , you can,t update it.")
        }
    }
    catch(error){
        res.status(501).send(`Catch error ${error}`)
    }
}

//### GET POST BY ID

export async function getpost(req, res){
    try{
        // Find Post By ID
        const postId = req.params.id;
        const getPost = await Post.findById(postId)
        res.status(201).send(getPost)
    }
    catch(error){
        res.status(501).send(`Catch error ${error}`)
    }
}


//### GET ALL POST 


export async function getallpost(req, res){
    try{
        // Find Posts
        const getPosts = await Post.find()
        res.status(201).send(getPosts)
    }
    catch(error){
        res.status(501).send(`Catch error ${error}`)
    }
}

// ###  DELETE POST

export async function deletepost(req, res){
    try{
        // Find Post By ID
        const postId = req.params.id;
        const postDelete = await Post.findByIdAndDelete(postId)
        res.status(201).send(postDelete)
    }
    catch(error){
        res.status(501).send(`Catch error ${error}`)
    }
}