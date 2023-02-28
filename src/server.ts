import { Client } from "@notionhq/client";
import { NOTION_DATABASE_ID, NOTION_KEY } from "configs/NotionConfigs";

const notion = new Client({
  auth: "secret_aXnHl3dRk1RokkM0bPCuvmnZRG1k2pOFqKvmse0dqk2",
});

const databaseId = "8f7c8cf488944f65bd9e575fb358b6d6";

async function addItem(text: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error: any) {
    console.error(error.body);
  }
}

async function retrieveItem() {
  try {
    const response = await notion.pages.retrieve({
      page_id: databaseId,
    });
    console.log(response);
  } catch (error: any) {
    console.error(error.body);
  }
}
retrieveItem();
