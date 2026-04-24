/**
 * @module GitHubBridge
 * @SiD GIT-BR-001-SAFE
 * @Audit_ID SEC-FIX-028
 * @Popis_Ukolu Odstranění tajného tokenu z kódu. Použití procesních proměnných.
 * @Status SECURED
 */

export interface GitHubPushResponse {
  status: string;
  target: string;
  sha?: string;
}

export const GitHubBridge = {
  async pushFile(path: string, content: string, message: string): Promise<GitHubPushResponse> {
    const TOKEN = process.env.GITHUB_TOKEN;
    const OWNER = process.env.GITHUB_OWNER || "jirisar7-eng";
    const REPO = process.env.GITHUB_REPO || "SynthesisWeb";

    if (!TOKEN) {
      throw new Error("[GIT-ERROR] Token nenalezen v ENV. Zkontroluj nastavení AI Studia.");
    }

    try {
      let sha: string | undefined;
      try {
        const getRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`, {
          headers: { 
            Authorization: `token ${TOKEN}`,
            "Accept": "application/vnd.github.v3+json"
          }
        });
        if (getRes.ok) {
          const data = await getRes.json();
          sha = data.sha;
        }
      } catch (e) {}

      const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${TOKEN}`,
          "Accept": "application/vnd.github.v3+json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `[SEC-FIX-028] ${message}`,
          content: btoa(unescape(encodeURIComponent(content))),
          sha
        })
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "GitHub API Error");
      }

      return {
        status: "RECONFIGURED",
        target: REPO,
        sha
      };
    } catch (error) {
      throw error;
    }
  }
};