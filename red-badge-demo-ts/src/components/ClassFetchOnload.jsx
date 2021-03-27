import React, { Component } from 'react';
import { Container, Media } from "reactstrap";

class ClassFetchOnload extends Component {
    constructor(props){
        super(props);
        this.state = { blogPostData : [] };
        
    };

    fetchBlogData() {
        const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
        fetch(url)
          .then((res) => res.json())
          .then((json) => this.setState({ blogPostData : json }));
    };

    componentDidMount(){
        this.fetchBlogData();
    };

    displayBlogPosts() {
        return this.state.blogPostData.map((data) => (
          <Media>
            <Media left href="#">
              <Media
                object
                src="https://picsum.photos/60"
                alt="Generic placeholder image"
                style={{ marginRight: "10px" }}
              />
            </Media>
            <Media body>
              <Media heading>{data.name.toUpperCase()}</Media>
              {data.body}.
              <p>
                Email: <a href={`mailto:${data.email}`}>{data.email}</a>
              </p>
            </Media>
          </Media>
        ));
      }

    //do I need this? Will calling it below work by itself?
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.blogPostData !== this.state.blogPostData) {
    //         this.displayBlogPosts();
    //     };
    // } ;

    render(){
        return (
            <div>Hello from ClassFetchOnload
                <Container>
                  {this.displayBlogPosts()}
                </Container>
            </div>
        )
    };
};

export default ClassFetchOnload;
