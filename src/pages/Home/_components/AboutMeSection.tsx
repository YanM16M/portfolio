import { User } from "lucide-react"

export const AboutMeSection = () => {
    return (
        <section className="flex flex-col items-center gap-20">
            <h1 className="text-5xl font-thin text-center">About me</h1>
            <User size={72} />
            <div className="max-w-xl flex flex-col gap-10">
                <p className="text-justify">
                    I am a creative developer who live near Paris and I am really passionate about
                    development. I started developing 9 years ago in high school and I am always seeking for improvements.
                    I love being productive and creating things in my spare time.
                </p>
                <div className="w-full grid grid-cols-2 gap-y-2 gap-x-52">
                    <div className="">
                        <h2 className="uppercase font-bold">Name</h2>
                        <span>Yanis Martinon</span>
                    </div>
                    <div>
                        <h2 className="uppercase font-bold">Education</h2>
                        <span>Bac+5</span>
                    </div>
                    <div>
                        <h2 className="uppercase font-bold">EMAIL</h2>
                        <span>yanis.martinon2@gmail.com</span>
                    </div>
                    <div>
                        <h2 className="uppercase font-bold">Phone</h2>
                        <span>07 81 79 68 76</span>
                    </div>
                </div>
            </div>
        </section>
    )
}