

export default function MessagesPage() {
  return (
    <div className="p-3">
        Messages
        <div className="mt-4">
            {[...new Array(15)].map((message, index) => (
                <div className="flex border mb-3">
                    {(index / 2 === 1) && 
                        <img
                            src={process.env.PUBLIC_URL+'./images/kon.png'} 
                            className="h-10 w-10 rounded-full" alt=''
                        />
                    }
                    <p className="flex-1 rounded mx-3 bg-gray-50 p-2">
                        Computer Science Cysber Security Information & Technology
                    </p>
                    {index / 2 !== 1 && 
                        <img
                            src={process.env.PUBLIC_URL+'./images/kon.png'} 
                            className="h-10 w-10 border-2 border-white rounded-full" alt=''
                        />
                    }
                </div>
            ))}
        </div>
    </div>
  )
}
