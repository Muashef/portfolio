import Image from "next/image";

const ProfilePhoto = () => {
    return (
        <div className="w-full">
            <Image src="/images/profile1.jpg" 
            width={400} 
            height={535} 
            alt="Muashef - React Developer"
            className={"rounded-[10px]"} 
            priority 
            />
        </div>
    )
}

export default ProfilePhoto