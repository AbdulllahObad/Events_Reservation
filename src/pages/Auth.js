import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import '../styles/Login.css';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import Layout from '../components/Layout';
const supabase = createClient('https://nvyrjccsfhmwgfyxmadz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52eXJqY2NzZmhtd2dmeXhtYWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMzQ3NjgsImV4cCI6MjAwMzkxMDc2OH0.Fl1MbK-OhIwOVHLiseVQeOi-7zuESXcqCbJ2PQBcNmU')

const Login = () => (
  <Layout>  
      <div className="custom-container d-flex justify-content-center align-items-center vh-150">
        <div className="auth-container bg-light">
          <Auth
            supabaseClient={supabase}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Your email address',
                  password_label: 'Your strong password',
                },
              },
            }}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </div>
      </div>
  </Layout>
);
export default Login;