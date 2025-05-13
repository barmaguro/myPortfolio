"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
  // formのname属性ごとにformData.get()で値を取り出すことができる
  const rawFormData = {
    fullname: formData.get("fullname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    polisycheck: formData.get("polisycheck") as string,
  };
  if (!rawFormData.fullname) {
    return {
      status: "error",
      message: "お名前を入力してください",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージを入力してください",
    };
  }
  if (!rawFormData.polisycheck) {
    return {
      status: "error",
      message: "プライバシーポリシーをお読みの上チェックをお入れください。",
    };
  }
  return { status: "success", message: "OK" };
}
