import React from 'react';

const Blog = () => {
    return (
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
             
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is cors?
                </p>
           
            </div>
            <p className="text-gray-700">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                what are you using firebase ? what other option do you have to implement authentication
                </p>
              
            </div>
            <p className="text-gray-700">
            Firebase provides multiple ways of authenticating users. You can choose from email authentication, federated identity provider integration like Google, Facebook or Twitter or you can implement authentication on custom server. If you are interested in details check this link.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                How does the private route work ?
                </p>
              
            </div>
            <p className="text-gray-700">
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                what is node js ? How does work nod
                </p>
           
            </div>
            <p className="text-gray-700">
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
            </p>
          </div>
        </div>
      </div>
      
    </div>
        </div>
    );
};

export default Blog;