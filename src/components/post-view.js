import React from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'

const colors = [
    '#0046b7',
    '#d1e000',
    '#a50000',
    '#009393',
    '#624d70'
]



class PostView extends React.Component{

    componentDidMount(){
        const {id} = this.props.match.params
        this.props.fetchPost(id)
    }

    randomColorGenerator(){
        return colors[Math.floor(Math.random()*colors.length)];
    }

    render(){
        const {post} = this.props

        if(!post){
            return <div>Loading..</div>
        }


       return(
           <div className='post-container'>
               <img style={{width:'100%'}} src={post.better_featured_image.media_details.sizes.large.source_url} />
            <div className='text-block'>
                <h1>{post.title.rendered}</h1>
            </div>
            <div className='description-block' style={{backgroundColor:`${this.randomColorGenerator()}`}}>
                <p>{post.content.rendered}</p>
            </div>
           </div>
       )
    }
}

function mapStateToProps(state,ownProps){
    return{
        post : state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchPost})(PostView)