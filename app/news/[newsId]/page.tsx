import fetchDataByHeader from "@/app/lib/fetchData";
import Image from 'next/image';
import Link from "next/link";

const fetchData = async (header: string) => {
    console.log(header);
    const result = await fetchDataByHeader(header);
    return result;
}

export default async function Page({ params } : { params : any }) {
    const data = await fetchData(params.newsId);
    const imagePath = `/${data?.image}.png`;
    return (
        <div className="items-center justify-center flex flex-col mt-32">
            <p className="justify-center"><Image
                src={imagePath}
                alt="Picture"
                width={500}
                height={500}
                className="object-cover rounded-lg">
            </Image></p>
            <p>Date: {data?.date}</p>
            <p className="mt-5">Content: {data?.content}</p>
            <Link className="mt-20" href={'/'}>Return</Link>
        </div>
    );
}