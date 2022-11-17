import { useEffect, useContext } from 'preact';
import Auth from '../contexts/Auth';
import Message from './Message';
import { openLink } from '../util/utils';
import { MESSAGE_ERROR, MESSAGE_INFO } from '../constants';

export default function LoginForm() {
  const auth = useContext(Auth);
  const input = useRef(null);
  const [domain, setDomain] = useState('');

  useEffect(() => {
    setTimeout(() => {
      this.input.current.focus();
    }, 150);
  }, []);

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.input.focus();
  //   }, 150);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalized = getNormalizedDomain();
    setDomain(normalized);
    await this.props.auth.login(normalized);
  };

  const getNormalizedDomain = () => {
    if (domain.startsWith('http://') || domain.startsWith('https://')) {
      return domain;
    } else {
      return `https://${domain}`;
    }
  };

  return (
    <form
      className="container container--full"
      method="GET"
      onSubmit={this.handleSubmit}
    >
      <p>
        To use Omnibear, sign in with your domain. Your website will need to
        support{' '}
        <a href="http://indieweb.org/micropub" onClick={openLink}>
          Micropub
        </a>{' '}
        for creating new posts.
      </p>

      <div className="fields-inline">
        <input
          type="text"
          name="me"
          placeholder="https://example.com"
          className="fields-inline__fill"
          value={domain}
          onInput={(e) => this.setDomain(e.target.value)}
          disabled={auth.isLoading}
          ref={input}
        />
        <button
          type="submit"
          disabled={auth.isLoading}
          className={auth.isLoading ? 'button is-loading' : 'button'}
        >
          Sign in
        </button>
      </div>

      {auth.hasErrors ? (
        <Message
          message={{
            type: MESSAGE_ERROR,
            message: auth.errorMessage || 'Error',
          }}
        />
      ) : null}
      {auth.authorizationPageOpened ? (
        <Message
          message={{
            type: MESSAGE_INFO,
            message:
              'Your authorization page has been opened in a new tab. You may close this window and complete your login there.',
          }}
        />
      ) : null}
    </form>
  );
}

// ??? old testing data?
// getFields(domain) {
//   return [
//     'redirect_uri=https://omnibear.com/auth/success/',
//     'client_id=https://omnibear.com',
//     'response_type=code',
//     'scope=create',
//     `me=${domain}`,
//   ].join('&');
// }
