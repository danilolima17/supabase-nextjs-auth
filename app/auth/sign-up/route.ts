import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

 
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
     
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Não foi possível autenticar o usuário`,
      {
        
        status: 301,
      },
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?message=Email de verifiação enviado`,
    {
      
      status: 301,
    },
  );
}
