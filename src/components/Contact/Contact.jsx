
const Contact = () => {
    return (
        <div className="py-16 flex items-center justify-center">
            <div>
                <div className="card w-96 glass mx-auto p-6 ">
                    <div className="text-center ">
                        <input type="text" placeholder="Name" className="input input-bordered w-full mb-3" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full mb-3" />
                        <textarea className="textarea textarea-bordered w-full mb-3" placeholder="Message"></textarea>
                        <button className="btn btn-info w-full">Send Message</button>
                    </div>
                </div>
            </div>
            <div >
                <img className="w-60" src="/src/images/mail-5000697_640.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;