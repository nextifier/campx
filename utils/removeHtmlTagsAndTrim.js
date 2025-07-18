export default function (htmlString) {
  const stringWithoutTags = htmlString.replace(/<[^>]*>/g, "");
  const trimmedString = stringWithoutTags.trim();
  return trimmedString;
}
