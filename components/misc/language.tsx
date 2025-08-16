'use client';
import React from 'react';
import { setUserLocale } from "@/services/locale-actions";

export default function Language() {
  return (
    <form action={setUserLocale}>
      <button type="submit" name="locale" value="en">
        English
      </button>
      <button type="submit" name="locale" value="nl">
        Nederlands
      </button>
    </form>
  );
}
