import Link from "next/link";

const MyInternalLink = ({ href, as, children }) => {
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
};

export default MyInternalLink;
