import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";

//upload video

export const uploadVideo = async(reqBody)=>{

    //make post http request "http://localhost:4000/videos" to get all videos from json-server and , return response to the add component

    return await commonAPI("POST", `${serverUrl}/videos`,reqBody)

}
//get all videos from json

export const getAllVideo = async()=>{
    //make GET request to "http://localhost:4000/videos" to get all videos from json-server return response to the view component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo = async(id)=>{
    //make GET request to "http://localhost:4000/videos" to get all videos from json-server return response to the card component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete video
export const deleteVideo =async(id)=>{
    //make delete request to "http://localhost:4000/videos" to get all videos from json-server return response to the video card component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

//store watching video history to json server
export const addToHistory=async(videoDetails)=>{

 //make post request to "http://localhost:4000/history" to store all videos from json-server return response to the video card component

 return await commonAPI("POST",`${serverUrl}/history`,videoDetails);

}

//get watching video history to json server
export const getAllHistory=async()=>{

 //make get request to "http://localhost:4000/history" to get all videos from json-server return response to the watchhistory component

 return await commonAPI("GET",`${serverUrl}/history`,"");

}


//add to category

export const addToCategory =async (reqBody)=>{
    
 //make POST request to "http://localhost:4000/history" to store all videos to json-server return response to the category component

 return await commonAPI("POST" , `${serverUrl}/categories`, reqBody)

}

//get all category from json-server
export const getAllCategory =async ()=>{
    
     //make GET request to "http://localhost:4000/history" to get all videos from json-server return response to the category component

    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

//delete a categories from json-server
export const deleteCategory = async (id)=>{
     //make DELETE request to "http://localhost:4000/history" to delte all videos to json-server return response to the category component

     return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//update a category from json server
export const updateCategory=async (id,body)=>{
    //make put http request "http://localhost:4000/history" to update a video ti the json server and return response to the category component.
 return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)    
}

//delte a  watch history from json server
export const deleteHistory=async (id)=>{
//make put http request "http://localhost:4000/history/id" to delete a video from the json server and return response to the watch history component.
return await commonAPI("DELETE", `${serverUrl}/history/${id}`,{})
}