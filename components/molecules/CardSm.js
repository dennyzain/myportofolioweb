import Image from 'next/image';

export default function CardSm({ pic, text }) {
  return (
    <div className="text-center w-24 p-2 box-border">
      <Image
        src={pic}
        alt={text}
        width={50}
        height={50}
        quality={60}
        blurDataURL={pic}
        placeholder="blur"
      />
      {text && (
        <div>
          <p className="text-xs ">{text}</p>
        </div>
      )}
    </div>
  );
}
