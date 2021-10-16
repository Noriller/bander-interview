import { Link } from '@chakra-ui/layout';

export function CustomLink({
  href,
  label,
  children,
}: {
  href: string;
  label?: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      textDecoration='underline'
      textDecorationColor='red'
      sx={{ '&:hover': { color: 'red' } }}
      isExternal>
      {label || children}
    </Link>
  );
}
