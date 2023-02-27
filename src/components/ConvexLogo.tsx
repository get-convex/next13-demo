// Can't use next/image because it prevents currentColor inheritance somehow
export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 249 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.5033 33.9296C53.5454 31.3225 52.0664 27.4689 52.0664 22.3789C52.0664 17.2889 53.5741 13.4353 56.5942 10.8282C59.6096 8.22115 63.7354 6.91512 68.9668 6.91512C71.1397 6.91512 73.059 7.06906 74.7295 7.38688C76.3999 7.69973 77.9985 8.23108 79.5253 8.98589V17.2442C77.1513 16.0772 74.4566 15.4912 71.4413 15.4912C68.7849 15.4912 66.8225 16.0126 65.5589 17.0555C64.2906 18.0983 63.6588 19.8711 63.6588 22.3789C63.6588 24.8023 64.281 26.5552 65.5302 27.6378C66.7747 28.7253 68.7466 29.2666 71.4461 29.2666C74.3035 29.2666 77.0173 28.5763 79.5923 27.2008V35.8414C76.7349 37.1773 73.1739 37.8427 68.9093 37.8427C63.5918 37.8427 59.4612 36.5367 56.5033 33.9296Z"
        fill="currentColor"
      />
      <path
        d="M82.168 22.3735C82.168 17.3232 83.556 13.4846 86.332 10.8527C89.1081 8.22074 93.2913 6.90974 98.8864 6.90974C104.52 6.90974 108.732 8.2257 111.532 10.8527C114.327 13.4796 115.725 17.3232 115.725 22.3735C115.725 32.6827 110.11 37.8373 98.8864 37.8373C87.7392 37.8423 82.168 32.6877 82.168 22.3735ZM102.902 27.6374C103.725 26.5498 104.137 24.7969 104.137 22.3785C104.137 19.9998 103.725 18.2568 102.902 17.1494C102.079 16.042 100.739 15.4908 98.8864 15.4908C97.0772 15.4908 95.7658 16.047 94.9617 17.1494C94.1576 18.2568 93.7556 19.9998 93.7556 22.3785C93.7556 24.8018 94.1576 26.5548 94.9617 27.6374C95.7658 28.7249 97.0724 29.2662 98.8864 29.2662C100.739 29.2662 102.074 28.7199 102.902 27.6374Z"
        fill="currentColor"
      />
      <path
        d="M118.365 7.53545H128.986L129.288 9.78996C130.455 8.95569 131.944 8.26543 133.753 7.72415C135.562 7.18287 137.434 6.90974 139.367 6.90974C142.948 6.90974 145.561 7.82843 147.212 9.66581C148.863 11.5032 149.687 14.3387 149.687 18.1823V37.2166H138.343V19.3692C138.343 18.0333 138.051 17.0749 137.467 16.4889C136.883 15.903 135.907 15.615 134.538 15.615C133.696 15.615 132.829 15.8136 131.944 16.2109C131.058 16.6081 130.317 17.1196 129.709 17.7453V37.2166H118.365V7.53545Z"
        fill="currentColor"
      />
      <path
        d="M149.72 7.53564H161.547L166.979 24.9411L172.411 7.53564H184.238L172.952 37.2168H161.001L149.72 7.53564Z"
        fill="currentColor"
      />
      <path
        d="M187.809 34.6641C184.401 32.0123 182.808 27.4089 182.808 22.4381C182.808 17.5963 184.076 13.6087 186.972 10.8527C189.867 8.09659 194.28 6.90974 199.852 6.90974C204.978 6.90974 209.008 8.14128 211.951 10.6044C214.89 13.0674 216.364 16.4294 216.364 20.6851V25.8844H194.792C195.329 27.4288 196.008 28.5461 197.679 29.2364C199.349 29.9266 201.68 30.2693 204.662 30.2693C206.442 30.2693 208.261 30.1253 210.109 29.8323C210.76 29.728 211.832 29.5641 212.396 29.44V36.6554C209.577 37.45 205.82 37.8472 201.584 37.8472C195.884 37.8423 191.217 37.3159 187.809 34.6641ZM204.446 19.4983C204.446 18.0284 202.814 14.8651 199.536 14.8651C196.578 14.8651 194.625 17.9787 194.625 19.4983H204.446Z"
        fill="currentColor"
      />
      <path
        d="M225.27 22.1254L214.65 7.53564H226.96L248.685 37.2168H236.255L231.426 30.5774L226.596 37.2168H214.224L225.27 22.1254Z"
        fill="currentColor"
      />
      <path
        d="M235.982 7.53564H248.235L238.83 20.5314L232.607 12.2036L235.982 7.53564Z"
        fill="currentColor"
      />
      <path
        d="M27.7062 34.7911C34.235 34.0809 40.39 30.6736 43.779 24.9866C42.1742 39.0527 26.4703 47.9433 13.6519 42.4847C12.4708 41.9831 11.4541 41.1487 10.7563 40.0758C7.8757 35.6454 6.92878 30.0081 8.28935 24.8923C12.1767 31.4634 20.081 35.4915 27.7062 34.7911Z"
        fill="#F3B01C"
      />
      <path
        d="M8.05071 20.7649C5.40431 26.7548 5.28968 33.768 8.53414 39.5394C-2.88375 31.1256 -2.75916 13.1209 8.39459 4.79158C9.42624 4.02172 10.6523 3.56477 11.9381 3.49524C17.2259 3.22206 22.5984 5.22369 26.3662 8.95377C18.7111 9.02827 11.2553 13.8312 8.05071 20.7649Z"
        fill="#8D2676"
      />
      <path
        d="M30.0586 10.7968C26.1962 5.52206 20.1508 1.93105 13.5273 1.82178C26.3307 -3.87019 42.0795 5.35816 43.794 19.002C43.9535 20.2685 43.7441 21.5599 43.171 22.7023C40.7788 27.4605 36.3432 31.1508 31.16 32.5167C34.9577 25.6178 34.4892 17.1891 30.0586 10.7968Z"
        fill="#EE342F"
      />
    </svg>
  );
}
