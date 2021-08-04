function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How AirBnB Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>AirBnb Plus</p>
                <p>AirBnB Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's only a clone</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Writen With</p>
                <p>ReastJS</p>
                <p>Next.JS</p>
                <p>TailwindCSS</p>
                <p>Learning Mobile-First Development</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Go to my GitHub Link Below:</p>
                <p className="text-red-600 font-mono hover:font-bold"><a href="https://github.com/ahartness">Github</a></p>
                <p>OR</p>
                <p>View the Source Code Below:</p>
                <p className="text-red-600 font-mono hover:font-bold"><a href="https://github.com/ahartness/airbnb-clone">Source Code</a></p>
            </div>
        </div>
    )
}

export default Footer
