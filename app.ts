export function areYouPlayingBanjo(name: string): string {
  let workingName = name.toLowerCase().trim();
  if (workingName.startsWith("r")) {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}
