import React from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router-dom'
import '../../style/style.css'


class PostsList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    rendertPosts(){
        return _.map(this.props.posts, post=>{
            return (
            <div className='li-wrapper grow' key={post.id}>
                <Link style={{ textDecoration: 'none',color:'white' }} to={`/posts/${post.id}`}>
                    <li className='list-group-item'>
                        <div className='title'>{post.title.rendered}</div>
                    </li>
                    <div>
                        {post.better_featured_image ? 
                        <img className='featured_image' src={post.better_featured_image.media_details.sizes.large.source_url}/> : <div></div> }
                    </div>
                </Link>
            </div>
            )
        })
    }

    render(){
        console.log(this.props.posts)
        return(
            <div>
                <h1 style={{display: 'flex', justifyContent:'center'}}>POSTS</h1>
                <ul className='list-group'>{this.rendertPosts()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts : state.posts
    }
}

export default connect(mapStateToProps,{fetchPosts})(PostsList)