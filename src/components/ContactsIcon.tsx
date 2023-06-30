import GithubIcon from './icons/GithubIcon';
import MailIcon from './icons/MailIcon';
import TagIcon from './icons/TagIcon';
import VelogIcon from './icons/VelogIcon';

type ContextType = {
  contact: 'email' | 'github' | 'velog';
};

const icons: { [key: string]: React.FunctionComponent } = {
  email: MailIcon,
  github: GithubIcon,
  velog: VelogIcon,
};

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<'svg'> & { contact: string }) {
  const Component = icons[contact] ?? TagIcon;

  return <Component {...props} />;
}
