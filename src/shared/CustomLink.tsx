import { Link } from '@chakra-ui/layout';

export function CustomLink({
  href,
  label,
}: {
  href: string;
  label: string;
}): JSX.Element {
  return (
    <Link
      href={href}
      textDecoration='underline'
      textDecorationColor='red'
      isExternal>
      {label}
    </Link>
  );
}
