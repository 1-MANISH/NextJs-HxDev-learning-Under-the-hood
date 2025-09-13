"use client"


const ErrorBoundary = ({error}:{error:Error}) => {
        return (
                <div>
                        Woops something went wrong : 
                        {(error.message)}
                </div>
        )
}

export default ErrorBoundary