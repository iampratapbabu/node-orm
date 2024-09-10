const blogService = require('../service/blog.service');

const db = require('../model');
const sequelize = db.sequelize;



const getAllBlogs = async(req,res) =>{
    try{
        const allBlogs = await blogService.getRows({});
        console.log("all blogs: ",allBlogs);
        return res.status(200).json({
            status:"success",
            msg:"Blogs Fetched Successfully",
            data:allBlogs
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

const createBlog = async(req,res) =>{
    try{
        const blogPayload = req.body;
        const allBlogs = await blogService.createRow(blogPayload);
        return res.status(200).json({
            status:"success",
            msg:"Blog Created Successfully",
            data:allBlogs
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

const getSingleBlog = async(req,res) =>{
    try{
        let blogId = req.params.blogId;
        let whereCondition = {id: blogId}
        const singleBlog = await blogService.getSingleRow(whereCondition);
        return res.status(200).json({
            status:"success",
            msg:"Single Blog Fetched",
            data:singleBlog
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

const updateBlog = async(req,res) =>{
    try{
        const payload = req.body;
        const blogId = req.params.blogId
        const updatedBlog = await blogService.updateRow(payload,{id:blogId});
        return res.status(200).json({
            status:"success",
            msg:"Blog Updated",
            data:updatedBlog
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

const deleteBlog = async(req,res) =>{
    try{
        const blogId = req.params.blogId
        const deletedBlog = await blogService.deleteRow({id:blogId});
        if(!deletedBlog){
            throw new Error("Error Deleting Blog");
        }
        return res.status(200).json({
            status:"success",
            msg:`Blog Deleted with Id: ${blogId}`,
            data:blogId
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

const rawBlogFetch = async(req,res) =>{
    try{
        let value = req.body.value;
        const customBlogList = await sequelize.query(
            `SELECT * FROM blogs WHERE id > ${value}`,
            {
              //replacements: { id: 1 }, // Replace `:id` with 1
              type: sequelize.QueryTypes.SELECT // Specify the query type (e.g., SELECT, UPDATE, etc.)
            }
        );

        return res.status(200).json({
            status:"success",
            msg:"Raw Query Ran",
            data:customBlogList
        })

    }catch(err){
        console.log('server error',err);
        return res.status(500).json({
            status:"failed",
            msg:err?.message,
            data:err
        })
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,

    rawBlogFetch
}