import routes from "../routes.js";
import Video from "../models/Video.js";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
    
}
export const search = (req, res) => {
    const { query: {term: searchingBy} } = req; 
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}
 
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const { 
        body: {videoTitle, videoDescription},
        file: {destination, filename, path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title: videoTitle,
        description: videoDescription
    });
    console.log(path)
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
} 

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });