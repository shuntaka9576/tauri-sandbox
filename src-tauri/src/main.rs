#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![simple_commnad])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn simple_commnad() {
    println!("I was invoked from JS!")
}
